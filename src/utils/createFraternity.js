import { readDB, writeDB } from './connectionDB';
import * as bcrypt from 'bcryptjs'; //lib usada para armazenar a senha criptografada: npm i bcrypt

export default async function createFraternity({ name, email, password, number }) {
  const fraternities = await readDB();

  let id = fraternities.length == 0 ? 1 : fraternities[fraternities.length - 1].id;

  const hashPassword = await bcrypt.hash(password, 10);

  const fraternity = {
    id: ++id,
    name,
    email,
    password: hashPassword,
    whatsapp: number,
    address: '',
    image: '',
    description: '',
    members: [],
    capacity: 0,
    min_price: 0,
    max_price: 0,
  };

  for (let frat of fraternities) {
    if (frat.name === name) throw { error: 'Esse usuário já existe!' };
    else if (frat.email === email) throw { error: 'Um erro inesperado ocorreu!' };
  }

  fraternities.push(fraternity);

  writeDB(fraternities);
}
