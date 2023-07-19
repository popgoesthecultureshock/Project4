import Client from './api'

export const getNotes = async () => {
  try {
    const res = await Client.get('/note')
    return res.data
  } catch (error) {
    throw error
  }
}

export const getNoteById = async (id) => {
  try {
    const res = await Client.get(`/note/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const createNote = async (data) => {
  try {
    console.log(data)
    const res = await Client.post('/note', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const updateNote = async (data, id) => {
  try {
    console.log(data)
    const res = await Client.put(`/note/${id}`, data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const deleteNote = async (id) => {
  try {
    const res = await Client.delete(`/note/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}
