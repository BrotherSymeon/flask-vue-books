.PHONY: test help lint run


.DEFAULT: help
help:
	@echo "make test"
	@echo " 	run thne python tests"
	@echo "make run"
	@echo " 	run the flask app"

test:
	python -m unittest discover

run:
	flask run
