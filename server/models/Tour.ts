const Sequelize = require('sequelize')
import db from '../db/connections';

const Tour = db.define('tour', 
    {
        name: {
            type: Sequelize.STRING,
        },
        city: {
            type: Sequelize.STRING,
        },
        country: {
            type: Sequelize.STRING,
        },
        date_start: {
            type: Sequelize.STRING,
        },
        date_end: {
            type: Sequelize.STRING,
        },
        avgReview: {
            type: Sequelize.INTEGER,
        },
        duration: {
            type: Sequelize.STRING,
        },
        price: {
            type: Sequelize.INTEGER,
        }
    }
)

export default Tour;