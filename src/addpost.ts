import connection from './db'; // Import the database connection
import { Request, Response } from 'express';

export const addPost = async (req: Request, res: Response) => {
    try {
        const { title, content } = req.body; // Extract data from the request body

        if (!title || !content) {
            return res.status(400).json({
                status: false,
                code: 400,
                message: "Title and content are required",
            });
        }

        // SQL query to insert data into the table
        const query = 'INSERT INTO your_table_name (title, content) VALUES (?, ?)';
        await connection.promise().query(query, [title, content]);

        res.status(201).json({
            status: true,
            code: 201,
            message: "Post added successfully",
        });
    } catch (error) {
        res.status(500).json({
            status: false,
            code: 500,
            error: error,
            message: "Internal Server Error",
        });
    }
};
