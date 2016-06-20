//This program calculates the number of times the ball passes by the sensor as it is thrown to and fro by two or more people
    int count = 1; //declaring a global variable

//setting pin number 7 as a constant
    const input_signal_pin = 7;

//setting up function variables
    void setup(){
    long signal_duration;
    long max_distance = 400; min_distance = cm;
    long distance = max_distance - min_distance;

//setting pin mode for output signal
    pinMode(signal_in, OUTPUT);
 
//invoking the signal
    digitalWrite(signal_in, LOW);
    delayMicroseconds(2);
    digitalWrite(signal_in, HIGH);
    delayMicroseconds(5);
    digitalWrite(signal_in, LOW);
    
//setting up pin mode for input signal    
    pinMode(signal_in, INPUT);
    
//receiving signal from sensor    
    signal_duration = pulseIn(signal_in, HIGH);
//setting up methods
    int total_count = number_of_counts(count);//Serial.onRecieve();
    long  cm = microsecondsToCentimeters(signal_duration);
//establishing serial communication
    Serial.begin(9600);
}

//running the functions
void loop(){
  if(min_distance <= 0){
    Serial.print();
    delay(100);
              } else if(distance < max_distance - (400 + cm)/2) 
                      {
                        Serial.print(total_count "counts ");
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

