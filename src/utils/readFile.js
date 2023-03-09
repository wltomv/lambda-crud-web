const readfile = (e) => {
	const { files } = e.currentTarget;
	const file = files[0];
	const url = URL.createObjectURL(file);
	return { name: file.name, url, file };
};

export default readfile;
