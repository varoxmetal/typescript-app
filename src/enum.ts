enum ROL {
  ADMIN = 'admin',
  SELLER = 'seller',
  CUSTOMER = 'customer'
}

type User = {
  username: string;
  role: ROL;
}

const newUser: User = {
  username: 'varoxmetal',
  role: ROL.ADMIN,
}
