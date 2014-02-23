define sed_script
/SCRIPT/{
s/SCRIPT//
r js1k_dragons.js
}
endef

export sed_script

test.html: js1k_dragons.js shim-normal.html
	sed "$$sed_script" shim-normal.html > test.html
