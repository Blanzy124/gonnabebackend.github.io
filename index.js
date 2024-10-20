const oracledb = require('oracledb'); // Asegúrate de usar 'const', no 'anst'

async function connectToDB() {
  try {
    const connection = await oracledb.getConnection({
      user: 'ADMIN',
      password: 'Mgee2005????',
      connectString: '(description= (retry_count=20)(retry_delay=3)(address=(protocol=tcps)(port=1522)(host=adb.us-sanjose-1.oraclecloud.com))(connect_data=(service_name=g91e03155e00e4b_backend_high.adb.oraclecloud.com))(security=(ssl_server_dn_match=yes)))',
      walletLocation: 'C:\\Users\\samue\\gonnabebackend.github.io\\Wallet_BackEnd',
      walletPassword: 'Mgee2005????'
    });
    

    console.log("Conexión exitosa a la base de datos!");

    // Realiza consultas aquí, si lo deseas

    await connection.close();
  } catch (err) {
    console.error('Error al conectarse a la base de datos:', err);
  }
}

connectToDB();