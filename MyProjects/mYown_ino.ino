//counting how many times an object passes by the Object_Detection_System
//include the library code
#include <LiquidCrystal.h>
const int signal_in = 7;
int sum = 0;
int count = 1;
int button_on = 6;
int button_off = 5;
//initialize the library with the number of the interface pins
LiquidCrystal lcd(8,9,10,11,12,13);
void setup()
{ 
  pinMode(button_on, INPUT);
  pinMode(button_off, INPUT);

  // set up the LCD's number of columns and rows:
  lcd.begin(20, 4);
  // Print a message to the LCD.
  lcd.print("hello every one,\nfeel free,\n play!");
  Serial.begin(9600);
}

void loop()
{ 
  if(button_on = HIGH){
    // set the cursor to column 0, line 1
    // line 1 is the second row, because counting begins with 0 
    lcd.setCursor(0, 1);
    // print the number of seconds since reset:
    lcd.print(millis()/1000); 

    long signal_duration, inches,total;
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
    total = sum_of_throws(sum);

    if( inches > 0 && inches < 197 )
    {
      if(count >= sum)
      {   
        Serial.print(inches);
        Serial.print("in, ");
        Serial.print(count);
        Serial.print(" counts ");
        Serial.print(" and sum is ");
        Serial.print(total);
        Serial.println();
        delay(1000);
      } 

    } 
    else if( inches == 197 )
    {
      Serial.print(inches);
      Serial.print("in, ");
      Serial.println();
      delay(1000);
    }
  } 
  else if (button_off = LOW)
  {
    Serial.end();
  }
}


long microsecondsToInches(long microseconds)
{ 
  return microseconds / 74 / 2;
}

int sum_of_throws(int sum)
{ 
  sum = sum +count;
  count++;
  return sum;
}

