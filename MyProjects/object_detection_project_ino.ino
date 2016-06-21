//This program calculates the number of times the ball passes by the sensor as it is thrown to and fro by two or more people
//declaring a global variable
int count = 1; 
int total_count = 0;
long  cm = 0; 
long max_distance = 0;
long min_distance = 0;
long distance = 0;


//setting pin number 7 as a constant
    const int input_signal_pin = 7;
  
//setting up function variables
    void setup(){
      
    long signal_duration;
     max_distance = 400; 
     min_distance = cm;
     distance = max_distance - min_distance;

//setting pin mode for output signal
    pinMode(input_signal_pin, OUTPUT);
 
//invoking the signal
    digitalWrite(input_signal_pin, LOW);
    delayMicroseconds(2);
    digitalWrite(input_signal_pin, HIGH);
    delayMicroseconds(5);
    digitalWrite(input_signal_pin, LOW);
    
//setting up pin mode for input signal    
    pinMode(input_signal_pin, INPUT);
    
//receiving signal from sensor    
    signal_duration = pulseIn(input_signal_pin, HIGH);
//setting up methods
     total_count = number_of_counts(count);//Serial.onRecieve();
     cm = microsecondsToCentimeters(signal_duration);
//establishing serial communication
    Serial.begin(9600);
}

//running the functions
void loop(){
  if(min_distance <= 0){
    Serial.println();
    delay(100);
              } else if( distance < max_distance - (400 + cm)/2 ) 
                      {
                        Serial.print(total_count);
                        Serial.print(" counts ");
                        Serial.println();
                        delay(100);
                      }
           }
           
//calling the total_counts method
int number_of_counts(int count)
  {
   count++;
    return count;
  }

//calling the cm method
long microsecondsToCentimeters(long microseconds)
  {
    return microseconds/29/2;
  }

