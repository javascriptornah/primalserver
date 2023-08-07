import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_PRIMAL_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_PRIMAL_SUPABASE_ANON_KEY;
const client = createClient(supabaseUrl, supabaseKey);

export default client;
