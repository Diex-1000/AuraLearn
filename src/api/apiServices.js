import apiClient from './apiClient'

// Crear perfil completo en un solo paso
export const createProfile = async (data) => {
  return await apiClient.post('/', data)
}

// Obtener todos
export const listProfiles = async () => {
  return await apiClient.get('/')
}

// Obtener uno
export const getProfile = async (id) => {
  return await apiClient.get(`/${id}`)
}

// Enviar perfil y pedir recomendaciones (si tu backend lo mantiene)
export const submitAndRecommend = async (id) => {
  return await apiClient.post(`/${id}/submit`)
}

// Eliminar perfil
export const deleteProfile = async (id) => {
  return await apiClient.delete(`/${id}`)
}
