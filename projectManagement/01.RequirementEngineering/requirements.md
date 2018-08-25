### Project title: PomodoroManager (working title)

# Table of contents

1.	Introduction
 1.1	Purpose
 1.2	Project Scope
2.	Overall Description
 2.1	Product Perspective
 2.2	Product Features
 2.4	Operating Environment
3.	System Features
 3.1	Pomodoro Timer
 3.2	Timeframe
4.	External Interface Requirements
 4.1	User Interfaces


# 1.	Introduction
## 1.1	Purpose
This document covers the requirements for the PomodoroManager app.
## 1.2	Project Scope
Includes Pomodoro-timer function and a time-frame-manager.
# 2.	Overall Description
## 2.1	Product Perspective
Stand alone app.
## 2.2	Product Features
Set-up, start, stop two (working and break) timer.
Set-up a time-frame and starting time.
## 2.3	Operating Environment
Android operating system version 'Pie', 'Oreo', 'Nougar', 'Marshmallow'.
# 3.	System Features
## 3.1	Pomodoro Timer
### 3.1.1	Description and Priority
Timer component, includes the countdown and a start button.
Priority: High
### 3.1.2	Stimulus/Response Sequences
Press component: Start the countdown
Press again: Stop the countdown
When the countdown hits 0: Play alarm
### 3.1.3	Functional Requirements
State: will be controlled trough main component.
State includes number of minutes for countdown.
Timer has to display three countdowns:  
1st: Working timer  
2nd: Short break timer  
3nd: Long break timer  
Duration of the timer can be set by user in the settings panel.
## 3.2	Timeframe manager
### 3.1.1	Description and Priority
See additional mockup for visuals.  
timeframe can be adjusted by user. User can name the given timeframe.
Priority: High
### 3.1.2	Stimulus/Response Sequences
User can add, change and remove timeframes.
User can add, change and remove text of the timeframes.
### 3.1.3	Functional Requirements
Every other timeframe is a break. After four work-timeframes, a long break timeframe will be displayed.
# 4.	External Interface Requirements
## 4.1	User Interfaces
See additional mockup.
