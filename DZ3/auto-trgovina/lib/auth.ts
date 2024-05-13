import bcrypt from "bcrypt";
const saltRounds = 10;

// Function to hash a password
export const hashPassword = async (password: string) => {
  try {
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(password, salt);
    return { salt, hash };
  } catch (error) {
    throw error;
  }
};

// Function to verify a password
export const verifyPassword = async (
  password: string,
  hash: string,
  salt: string
) => {
  try {
    const rehash = await bcrypt.hash(password, salt);
    return rehash === hash;
  } catch (error) {
    throw error;
  }
};
