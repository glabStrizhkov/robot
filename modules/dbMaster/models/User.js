
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
        "User",
        {

            userId: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                field: 'user_id',
            },

            userName: {
                type: DataTypes.STRING,
                allowNull: true,
                field: 'user_name'
            },

            lastName: {
                type: DataTypes.STRING,
                allowNull: true,
                field: 'last_name'
            },
            createdAt: {
                type: DataTypes.DATE,
                allowNull: false,
                field: 'created_at',
            },
            updatedAt: {
                type: DataTypes.DATE,
                allowNull: false,
                field: 'updated_at',
            },
            deletedAt: {
                type: DataTypes.DATE,
                allowNull: true,
                field: 'deleted_at',
            }
        },
        {
            "tableName": "users",
            "paranoid": true,
            "timestamps": true,
            "freezeTableName": true
        }
    );
    User.attributes = {
        base: [

            "userId",
            "userName",
            "lastName",
        ]
    };
    User.include = {
        base: (include = []) => {
            return {
                model: User,
                as: 'users',
                required: false,
                attributes: User.attributes.base,
                include,
            };
        }
    };

    return User;
}