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

    }

    async getSessionById(id) {
        try {
            const result = await this.db.query('SELECT * FROM sessions WHERE id = $1', [id]);
            return result.rows[0];

        } catch (err) {
            console.error(err);
            res.status(500).send('Server error');
        }
    }

    async createSession(session) {
        const result = await this.db.query('INSERT INTO sessions (title, description) VALUES ($1, $2) RETURNING *',
            [session.title, session.description]);
        return result.rows[0];
    }
}

module.exports = sessionRepository;
