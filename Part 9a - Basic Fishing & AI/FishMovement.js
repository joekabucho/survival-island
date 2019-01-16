#pragma strict

var target : Transform[];
var isMoving : boolean = false;

var speed : float = 5.0f;

private var newTarget : Transform;

function Update()
{ 
	if(isMoving == false)
	{
		newTarget = target[Random.Range(0,target.length)];
		isMoving = true;
	}
	
	transform.position = Vector3.MoveTowards(transform.position, newTarget.position, speed * Time.deltaTime);
	
	if(transform.position == newTarget.position)
	{
		isMoving = false;
	}
}