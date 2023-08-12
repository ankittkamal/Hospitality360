import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://actjojmzvcauruzowqjl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFjdGpvam16dmNhdXJ1em93cWpsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE4NjU3OTgsImV4cCI6MjAwNzQ0MTc5OH0.l-WNh1iZCp2k3N_vgP8AiEbVGOU0jxD3XNvG_QgGQBs";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
