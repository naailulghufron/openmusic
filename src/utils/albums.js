const mapDBToModel = ({
  id,
  title,
  year,
  created_at,
  updated_at,
}) => ({
  id,
  title,
  year,
  createdAt: created_at,
  updatedAt: updated_at,
});

module.exports = { mapDBToModel };
