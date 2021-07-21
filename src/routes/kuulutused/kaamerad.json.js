import supabase from '$lib/db'

export async function get() {
  const { data, error } = await supabase.from('listings').select().eq('category', 'camera')
  if (error) throw new Error(error.message)
  return { body: data }
}
