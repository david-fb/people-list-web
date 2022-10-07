const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const END_POINTS = {
  logIn: () => `${API_BASE_URL}/login/`,
  refreshToken: () => `${API_BASE_URL}/refresh/`,
  person: {
    getAll: () => `${API_BASE_URL}/person`,
    create: () => `${API_BASE_URL}/person`,
    getById: (id) => `${API_BASE_URL}/person/${id}`,
    updateById: (id) => `${API_BASE_URL}/person/${id}`,
    deleteById: (id) => `${API_BASE_URL}/person/${id}`,
  },
};
