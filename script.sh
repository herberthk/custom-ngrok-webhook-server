#!/usr/bin/sh

set -e # Exit immediately if a command exits with a non-zero status.

echo -e "==> running: adding authtoken\n"
npx ngrok config add-authtoken 2RR5z0cbxndrL3UVYDk5rzCBeaU_UjTG4tN4KLRtwy6jXBVS

echo -e "==> running: running ngrok server\n"
npx ngrok http https://supabase-stripe-saas-psi.vercel.app