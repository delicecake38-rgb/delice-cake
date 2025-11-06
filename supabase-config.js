// supabase-config.js
const SUPABASE_URL = 'https://ypxvnxddzgaopjdhclzj.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlweHZueGRkemdhb3BqZGhjbHpqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIzODk1OTUsImV4cCI6MjA3Nzk2NTU5NX0.bMhlMjgbxjCZRUbXn0-WoZZaeSOySSAoEPzmL9UwpCo'

// Initialiser Supabase
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
