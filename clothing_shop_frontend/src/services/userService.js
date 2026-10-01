import api from "./api";

export async function getProfile() {
  const response =
    await api.get(
      "/users/profile"
    );

  return response.data;
}

export async function updateProfile(
  userData
) {
  const response =
    await api.put(
      "/users/profile",
      userData
    );

  return response.data;
}

export async function changePassword(
  passwordData
) {
  const response =
    await api.put(
      "/users/password",
      passwordData
    );

  return response.data;
}