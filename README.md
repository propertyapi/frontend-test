# SearchLand E2E test

Here you should have everything you need to complete the test
## Process

1. Fork the repository
2. Clone and install your forked repo
3. Compelte the test and commit your changes
4. Send me the link to the forked repo and give me access to see it (archiekd (https://github.com/archiekd))


## Requirements

1. Write an E2E test for the SearchLand application
   1. Click on the building with this title number `NGL346031` it is at the coordinates 
		```
		{
			lat:  51.5004045307746,
			lng: -0.12814436673338322 
		}
		```
		![Where to click!](./images/where_to_click.png)
	2. Make sure that the mini box in the top right hand side appears
   	![Mini title view!](./images/mini_view.png)
	3. Click the expand button on the mini title view
   	![Title view!](./images/title_view.png)
	4. Click on the planning tab
		![Planning!](./images/planning.png)
	5. Check that the planning count has 17
2. Create a popover component
   1. It should look the same as the following [popover](https://ant.design/components/popover/)
   2. You may not use antd to build this component
   3. It shoudl take the following props at a minimum
      1. trigger
      2. title
      3. content
      4. placement
   4. It should be able to take at least two position left and right
   5. It should be able to be triggered by hover or click 


