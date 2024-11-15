

def print_upper_words(word_list, letters):
    """
        This function takes in a list of words, and prints each word letter by letter 
        in uppercase.
        It also takes in a set of single letter strings to specifically print words that 
        start with that letter.

        Parameters:
        word_list(list): list of words
        letters(set): set of characters to filter words
    """

    #put all filter letters into a single string
    letter_filter = ""
    for x in letters:
        letter_filter += x

    #pass words through the filter by checking if the first letter
    #is in the letter_filter
    sorted_list = []
    for x in word_list:
        if x[0].lower() in letter_filter:
            sorted_list.append(x)
    
    #print the sorted_list
    for x in sorted_list:
        for j in x:
            print(j.upper())
        print("")


#this should print "HELLO", "HEY", "YO", and "YES"

must_start_with={"h", "y"}
print_upper_words(["hello", "hey", "goodbye", "yo", "yes"], must_start_with)