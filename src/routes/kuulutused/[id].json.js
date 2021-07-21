import supabase from '$lib/db'

export async function get({ params }) {
  const { id } = params
  const { data, error } = await supabase.from('listings').select().eq('id', id).single()
  if (error) throw new Error(error.message)
  return { body: data }
}
