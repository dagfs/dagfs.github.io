# dotnet

## Upgrading from 2.x to 3.1

So you are upgrading from ASP.NET Core 2.x to 3.x? Alright lets jump in and get our hands dirty!

Start by reading [Microsofts guide - Migrate from ASP.NET Core 2.2 to 3.0](https://docs.microsoft.com/en-us/aspnet/core/migration/22-to-30?view=aspnetcore-3.1&tabs=visual-studio)

Back already? Alright! Yes it is as simple as they say

### 1. Update tarfet Framework

`<TargetFramework>netcoreapp2.x</TargetFramework> -> <TargetFramework>netcoreapp3.x</TargetFramework>`

### 2. Remove obsolete package references

Remove lines starting with `<PackageReference Include="Microsoft.AspNetCore.

### 3. Update packages

Update one at a time and make sure your tests run. Last time I update everything then reverted what broke. If you update one at a time and then run your tests. Then you can commit these, then look into what can be done to update the rest of the packages. If there is a Major make sure to look up the release log to look for breaking changes.

https://nukeeper.com/commands/update/

https://github.com/jerriep/dotnet-outdated

dotnet outdated -u:prompt
