# Fill with your Zoho OAuth app credentials, then run this file in PowerShell.
$env:ZOHO_CLIENT_ID = "your_client_id"
$env:ZOHO_CLIENT_SECRET = "your_client_secret"
$env:ZOHO_REFRESH_TOKEN = "your_refresh_token"

# Optional overrides
$env:ZOHO_ACCOUNTS_DOMAIN = "accounts.zoho.com"
$env:ZOHO_API_DOMAIN = ""
$env:ZOHO_MODULES = "Leads,Contacts,Deals"

Write-Host "Zoho env vars loaded for this PowerShell session."
