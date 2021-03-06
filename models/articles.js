const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Articles = sequelize.define(
    'Articles',
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      contents: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      likes: {
        type: DataTypes.STRING,
        defaultValue: 0,
      },
      dislikes: {
        type: DataTypes.STRING,
        defaultValue: 0,
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    },
  );
  Articles.associate = (models) => {
    Articles.belongsTo(models.Users, { foreignKey: 'user_id', as: 'Users' });
  };
  return Articles;
};
