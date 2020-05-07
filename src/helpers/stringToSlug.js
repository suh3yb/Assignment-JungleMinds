const stringToSlug = title => {
  return title.toLowerCase().split(' ').join('-');
};

module.exports = stringToSlug;
