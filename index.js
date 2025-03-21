const pg = require('pg');
const client = new pg.Client({
    user: 'user1',
    host: '192.168.0.207',
    database: 'user1_db',
    password: 'B55CDB8S',
    port: 5432,
});

const getFromDb = async () => {
    await client.connect();
    
    const result = await client.query('SELECT * FROM grades');

    console.table(result.rows);
    await client.end();
}

const InsertToDb = async (student_id,course_id,grade) => {
    const result = await client.query(`INSERT INTO grades (student_id,course_id,grade) VALUES ($1,$2,$3)`,[student_id,course_id,grade]);
    console.log(result);
}
const maion = async () => {
    await client.connect();
    await InsertToDb(2,2,90);
    await getFromDb();
    await client.end();
}

