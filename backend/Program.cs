using Microsoft.EntityFrameworkCore;
using Backend.Infrastructure.Repositories;
using Backend.Application.Services;
using Backend.API.Controllers;
using Backend.Persistence.Data;
using Microsoft.IdentityModel.Tokens;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

// Replace this line to use MySQL:
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString))
           .EnableSensitiveDataLogging() // Enables query logs
           .LogTo(Console.WriteLine, LogLevel.Information) // Logs queries to console
);

// Register services for dependency injection (make sure AuthService and other services are registered)
builder.Services.AddScoped<AuthService>();
builder.Services.AddScoped<UserRepository>();
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend", policy =>
    {
        policy.WithOrigins("http://localhost:5173") // URL of your frontend React app
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});
var key = Encoding.UTF8.GetBytes(builder.Configuration["Jwt:Key"]!);

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,
            ValidIssuer = builder.Configuration["Jwt:Issuer"],
            ValidAudience = builder.Configuration["Jwt:Audience"],
            IssuerSigningKey = new SymmetricSecurityKey(key)
        };
    });


builder.Services.AddControllers();
var app = builder.Build();

app.UseCors("AllowFrontend"); 

app.UseAuthorization();

app.MapControllers();

app.Run();
