class sessionRepository {
    constructor(db) {
        this.db = db;
    }

    async getAllSessions() {
        try {
            const result = await this.db.query(('SELECT * FROM sessions'));
            return result.rows;

        } catch (err) {
            console.error(err);
            res.status(500).send('Server error');
        }
        //close the connection
        await this.db.end();
    }

    async getSessionById(id) {
        try {
            const result = await this.db.query('SELECT * FROM sessions WHERE id = $1', [id+1]);
            return result.rows[id];

        } catch (err) {
            console.error(err);
            res.status(500).send('Server error');
        }
          //close the connection
          await this.db.end();
    }

    async createSession(session) {
        const result = await this.db.query('INSERT INTO sessions (title, description) VALUES ($1, $2) RETURNING *',
            [session.title, session.description]);
        return result.rows[0];
    }
}

module.exports = sessionRepository;
