//counting how many times an object passes by the Object_Detection_System
int led_pin = 5;
const int signal_in = 8;
int sum = 0;
void setup()
{
//pinMode(led_pin, OUTPUT);

Serial.begin(9600);
}

void loop()
{ 
  int total = 0;
  long signal_duration, inches, cm;
  pinMode(signal_in, OUTPUT);
digitalWrite(signal_in, LOW);
delayMicroseconds(2);
digitalWrite(signal_in, HIGH);
delayMicroseconds(5);
digitalWrite(signal_in, LOW);

//
pinMode(signal_in, INPUT);
signal_duration = pulseIn(signal_in, HIGH);
//
inches = microsecondsToInches(signal_duration);
  cm = microsecondsToCentimeters(signal_duration);
if( inches == 197 )
{
  Serial.print(inches);
  Serial.print("in, ");
  Serial.print(cm);
  Serial.print("cm");
  Serial.println();
  delay(100);

} else if( inches < 197 )
 {
   
  for(int count = 1;count >= sum;count++)
  {  
     
  total = sum_of_throws(sum); 
  Serial.print(inches);
  Serial.print("in, ");
  Serial.print(cm);
  Serial.print("cm, ");
  Serial.print(count);
  Serial.print(" counts ");
  Serial.print(" and sum is ");
  Serial.print(sum);
  Serial.println();
  digitalWrite(led_pin, LOW);
  delay(100);
  }
 }
}


long microsecondsToInches(long microseconds)
{ 
  return microseconds / 74 / 2;
}

long microsecondsToCentimeters(long microseconds)
{
  return microseconds / 29 / 2;
}
int sum_of_throws(int count)
{
sum = count + 1;
return sum;
}
