module.exports = (sequelize, DataTypes) => {
    const Blog = sequelize.define('blog', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        blog: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        
            
    },{
        timestamps: false, // This disables createdAt and updatedAt fields
    });

    return Blog;
}
