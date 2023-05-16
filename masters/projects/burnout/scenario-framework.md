# Suggestion for a framework for burnout scenario

NB! This has few references and needs to be grounded more in the knowledge base.
In my mind, I seem to always strive for generating a normalized database schema to explain the domain I'm working on. This is no exception.

It is based on the idea that a person can handle a certain amount of stress in their life. By stress, I mean arousal or stimulation, as the word "stress" has come to mean what should be thought of as "bad stress" or "too much stress".  Some of this stress. 

MBI is used to describe what dimensions a person is feeling the consequences of unmanaged stress. Normally this goes from exhaustion to cynicism to lack of efficacy/productivity. I believe some scenarios in IT end up progressing in other ways. I will expand later. It is also worth mentioning that I believe inverting the MBI factors to Energy, Engagement, and Efficacy/productivity is beneficial in working with this problem as those factors are something every company wants to strive for in their workers.

## Example template:

|Part|Subpart|value|description|
|---|---|---|---|
|Intro||text|Introduction to the scenario - setting the stage - with some details of the persons personal life describing some stressors they have outside of work|
|Situation||text|The situation descibing factors that are leading to stress the worker is not able to manage|
|Consequense||list|what are the consequeses this person is feeling|
|Actions||list|list of acctions based on burnout symptoms and factors in AWS|
| Stress distrebution|||Lets say a person can handle stress on a scale from 2-10. The sum of two -2 - 2 scales, one for personal and one for work.|
||Total stress|-4 - 4|How much stress does this person have in their lives. -4 is basicly being a young child. 0 is normal, 4 is the most stressed you can be. 2 is possible for a while but not sustainable|
||Outside work|-2 - 2|How much stress does this person have outside of work? from -2 - everything is easy, 0 what would be concidered average, 2 things are hard|
||Work|-2 - 2|How much of this person stress seem to be related to work. -2 - things are easy, 0 normal, 2 way to much|
|MBI rating||| |
||Exhastion|-2 - 2|from -2 - have plenty of energy, to 2 - have no energy|
||Cynesism|-2 - 2|from -2 - fully engaged in the work they do, to 2 - it could be on fire and they would not care|
||efficacy|-2 - 2|-2 - Productive, to 2 - Getting nothing done|
|AWS rating|||
||Controll|-2 - 2|-2 you have all the controll, 0 normal, 2 non of the controll|
||Workload|-2 - 2|-2 you have nothing to do, 0 normal, 2 you are being crushed by the workload|
||Comunity|-2 - 2|-2 you have a strong community at work, 0 normal, 2 everyone hates eachother and there is constant conflict|
||Fairness|-2 - 2|-2 things are fair, 0 normal, 2 nothing is fair|
||Reward|-2 - 2|-2 you feel rewarded, 0 normal, 2 non of the rewards|
||Values|-2 - 2|-2 values align, 0 normal, 2 values are oposite|


## Intro
|Intro||text|Introduction to the scenario - setting the stage - with some details of the persons personal life describing some stressors they have outside of work|

## Situation
The situation descibing factors that are leading to stress the worker is not able to manage. Based on AWS.

|situation|AWS factor|description|
|---|---|---|
|afraid to release code as things can break|controll|every release is a pain and drains energy from the whole team|

## Consequense
what are the consequeses this person is feeling. Generate list for inspiration for creating scenarios.

Table of burnout symptoms

|symptom|MBI factor|
|---|---|
| problems focusing| exhastion|
| problems sleeping | |



### symptoms of exhastion
Generate list that can be used as inspiration for scenarios

### symptoms of cynesism
Generate list that can be used as inspiration for scenarios

### symptoms of lack of effiacy
Generate list that can be used as inspiration for scenarios

## Actions

Actions that can be taken. Could be a table of possible actions with links to burnout symptoms and AWS factors

|Action|burnout symptoms|aws factor|description|
|---|---|---|---|
|2 weeks sick leave||||
|give more controll||controll||

## Stress distrebution

Life exists mainly two places, at work and outside of work.

### Stress outside work
There are multiple stressors outside of work. 

Some examples are:
- fysikal illness
- mental illness
- financial problems
- relationship problems
- caregiving burdens

### stress at work
That is the result of AWS - average of AWS score rounded up? 


## MBI rating

That is the MBI.



## AWS rating
is the AWS rating. 





## Example scenarios


### So engaged they work to much

|Part|Subpart|description|
|---|---|---|
|Intro|Working for startup. really engaged. first job. not much going on outside of work. want to prove themselves. |
|Situation||there is so much one can do. its easy to work more|
|Consequense||feeling tired, problems getting up, problems falling asleep, snapping at others, problems focusing, less productive|
|Actions||take some days of relaxing then a few more days doing something rewarding but different, then comming back and having firm limits to workload|
| Stress distrebution||
||Total stress|1 - not managable over time|
||Outside work| -1 - few responsibilities|
||Work|2 - working way to much|
|MBI rating||| 
||Exhastion| 2|
||Cynesism|1|
||efficacy|1|
|AWS rating||
||Controll|-1|
||Workload|2|
||Comunity|-1|
||Fairness|0|
||Reward|0|
||Values|-1|

### IT scenarios that dont follow the normal MBI progression

|Part|Subpart|description|
|---|---|---|
|Intro|john is a consultant. start a new project a few months ago. he is inbetween the consultancy firm he is working, and two different appartmens in the company is is engaged at|
|Situation||he has been waiting for acces so he can do his work|
|Consequense||lack of motivation|
|Actions||remove obsicles that prevents him from doing work|
| Stress distrebution||
||Total stress|1|
||Outside work|0|
||Work|1|
|MBI rating||| 
||Exhastion|1|
||Cynesism|1|
||efficacy|2|
|AWS rating||
||Controll|1|
||Workload|-1|
||Comunity|1|
||Fairness|1|
||Reward|0|
||Values|2|


|Part|Subpart|description|
|---|---|---|
|Intro||
|Situation|||
|Consequense|||
|Actions|||
| Stress distrebution||
||Total stress||
||Outside work||
||Work||
|MBI rating||| 
||Exhastion||
||Cynesism||
||efficacy||
|AWS rating||
||Controll||
||Workload||
||Comunity||
||Fairness||
||Reward||
||Values||