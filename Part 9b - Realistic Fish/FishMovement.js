#pragma strict

var target : Transform[];
var isMoving : boolean = false;

var speed : float = 5.0f;

private var newTarget : Transform;

function Start()
{	
		animation.Play("Swim");
		animation["Swim"].wrapMode = WrapMode.Loop;
		animation["Swim"].speed = 2;
}

function Update()
{ 
	if(isMoving == false)
	{
		newTarget = target[Random.Range(0,target.length)];
		isMoving = true;
	}
	
	transform.position = Vector3.MoveTowards(transform.position, newTarget.position, speed * Time.deltaTime);
	transform.LookAt(newTarget);
	
	if(transform.position == newTarget.position)
	{
		isMoving = false;
	}
}