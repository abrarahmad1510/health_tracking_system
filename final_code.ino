// Sensor Pins
const int GSR_PIN = A0;  // GSR Sensor Input
const int PPG_PIN = A1;  // PPG Sensor Input
const int GSR_THRESHOLD = 380;  // Threshold for activating the car

// Motor driver pins (L298N)
const int motorIN1 = 7;
const int motorIN2 = 8;
const int motorENA = 9;  // Enable pin (PWM control)

// Buzzer pin
const int buzzer = 6;

void setup() {
  Serial.begin(9600);  // Start serial communication for Serial Plotter

  // Set motor pins as outputs
  pinMode(motorIN1, OUTPUT);
  pinMode(motorIN2, OUTPUT);
  pinMode(motorENA, OUTPUT);
  
  // Set buzzer pin as output
  pinMode(buzzer, OUTPUT);
}

void loop() {
  int gsrValue = analogRead(GSR_PIN);  // Read GSR sensor value
  int ppgValue = analogRead(PPG_PIN);  // Read PPG sensor value

  // Control car motion based on GSR
  if (gsrValue < GSR_THRESHOLD) {  
    digitalWrite(motorIN1, LOW);
    digitalWrite(motorIN2, HIGH);
    analogWrite(motorENA, 255); // Full speed
    tone(buzzer, 1000);  // Beep
  } 
  else {  
    digitalWrite(motorIN1, LOW);
    digitalWrite(motorIN2, LOW);
    analogWrite(motorENA, 0);
    noTone(buzzer);
  }

  // Print both values for Serial Plotter (comma-separated format)
  Serial.print("GSR:");
  Serial.print(gsrValue);
  Serial.print("  PPG:");
  Serial.println(ppgValue);

  delay(100);  // Small delay for smooth plotting
}

