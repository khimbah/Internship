#!/bin/bash

echo "This script tells if your Physics mark is higher or lower than that of your Maths"
echo "---------------------------------------------------------------------------------"

echo "Hi, can you please type your Science mark and press ENTER"
read Science_mark
echo "Please also type your Maths mark and press ENTER" 
read Maths_mark

L="Science mark is lower than $Maths_mark"
H="Science mark is higher than $Maths_mark"

if [ $Science_mark -ge $Maths_mark ] 
then
   echo "$H"
elif [ $Science_mark -lt $Maths_mark ]
then
   echo "$L"
elif [  $Science_mark="" ||  $Maths_mark"" ]
then
   echo "Either your Physics or your Maths mark was not entered...please enter your marks"
fi




