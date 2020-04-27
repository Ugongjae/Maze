package com.ugongjae.maze.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value="/game")
public class maincontroller {

	
	@RequestMapping(value="/good",method=RequestMethod.GET)
	public String Good() {
		return "good";
	}
	
	@RequestMapping(value="/up",method=RequestMethod.GET)
	public String goUp() {
		return "goup";
	}
	@RequestMapping(value="/down",method=RequestMethod.GET)
	public String goDown() {
		return "goup";
	}
	@RequestMapping(value="/left",method=RequestMethod.GET)
	public String goLeft() {
		return "goup";
	}
	@RequestMapping(value="/right",method=RequestMethod.GET)
	public String goRight() {
		return "goup";
	}
}
