import { supabase } from '/api'

async function getData() {
  try {
    const url = process.env.vercel_url || `http://localhost:3001/`
    const hostName = new URL(url).host
    let { data, error } = await supabase
      .from('Page data')
      .select('data')
      .eq('host_name', hostName)
      .order('created_at', { ascending: false })
      .limit(1)
      .single();

    if (error) {
      throw new Error(error.message);
    }

    if (data) {
      return data.data;
    } else {
      throw new Error('No data found.');
    }
  } catch (error) {
    throw new Error('Error fetching data: ' + error.message);
  }
}

module.exports = { getData };