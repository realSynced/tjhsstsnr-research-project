import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

// const supabaseUrl = process.env.SUPABASE_URL
// const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseUrl = 'https://ibsutwukeaiczzapocsh.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlic3V0d3VrZWFpY3p6YXBvY3NoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY0OTE5MTIsImV4cCI6MjA0MjA2NzkxMn0.IYoKtOoTPiY221FieKm8SJAOXtkoJirrRTo4f9Qg1vY'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})