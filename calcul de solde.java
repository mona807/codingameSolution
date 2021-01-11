package testjava11;

import java.util.*;
import java.math.*;
import java.io.*;

public class Calculator1 {

	

	public static void main (String args []) {
		
		int sum = 0;
		int[] prices= {12,15,18};
		int discount=20;
		int max = prices[1];
		for (int price : prices) {
			if (price < 1000000 ) {
				if (price > max) {
					max = price;

				}

				sum += price;
				sum = sum - ((max * discount) / 100);
		}

		System.out.println( Math.round(sum));
	}}



	
