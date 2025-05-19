myCourse = {}
course = {}

def addCourse(ID,Courseno):
    lst = [Courseno]
    lcs = [ID]
    if ID in myCourse.keys():
        myCourse[ID].append(Courseno)
    else:
        myCourse[ID] = lst
      
    if Courseno in course.keys():
        course[Courseno].append(ID)
    else:
        course[Courseno] = lcs
      
def removeCourse(ID,Courseno):
  
    if ID in myCourse.keys():
        if Courseno in myCourse[ID]:
            myCourse[ID].remove(Courseno)
            course[Courseno].remove(ID)
    else:
        print("You Don't have this Course")
      
      
def showCourseDetail():
    for key, value in course.items():
        print(key, ' : ', len(value))
def removeStudent(ID,Courseno):
    if ID in myCourse.keys():
        if Courseno in myCourse[ID]:
            myCourse[ID].remove(Courseno)
            course[Courseno].remove(ID)

while(True):
  
    x = int(input("What are you Staff or Student:\n1.)Student\n2.)Staff\nEnter your Choice 1/2:"))
    if(x == 1):
        ID = input("Please Enter your ID no")
        choice = int(input("\n1.) Show Schedule\n2.) Add Course\n3.) Remove Course\nEnter your Choice 1/2/3:"))
      
        if(choice == 2):
            name = input("Enter your course Name/Number:")
            addCourse(ID,name)
        elif(choice == 1):
            print("I am registered in following course:")
            for a in myCourse[ID]:
                print(a,end=' ')
        elif(choice == 3):
            name = input("Enter the name/number of course you want to remove")
            removeCourse(ID,name)
      
      
    elif(x==2):
        x=int(input("1.)Show Number of Students Registered in Each Class\n2.) Remove Student from Course\nEnter your choice 1/2:"))
      
        if x==1:
            print("Course   No of Student registered")
            showCourseDetail()
        elif x==2:
            ID = input("Enter the Id of Student to remove:")
            name = input("Enter the course name from which you want to remove:")
            removeStudent(ID,name)
      
    else:
        break