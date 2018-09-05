ClassRef["NSOrderedSet"] = {"[:]":"NSObject","[+]":{"orderedSet":{"abs":"Creates and returns an empty ordered set","dec":"+ (instancetype)orderedSet"},"orderedSetWithArray:":{"abs":"Creates and returns a set containing a uniqued collection of the objects contained in a given array.","dec":"+ (instancetype)orderedSetWithArray:(NSArray *)array"},"orderedSetWithArray:range:copyItems:":{"abs":"Creates and returns a new ordered set for a specified range of objects in an array.","dec":"+ (instancetype)orderedSetWithArray:(NSArray *)array range:(NSRange)range copyItems:(BOOL)flag"},"orderedSetWithObject:":{"abs":"Creates and returns a ordered set that contains a single given object.","dec":"+ (instancetype)orderedSetWithObject:(id)object"},"orderedSetWithObjects:":{"abs":"Creates and returns a ordered set containing the objects in a given argument list.","dec":"+ (instancetype)orderedSetWithObjects:(id)firstObj,, ..."},"orderedSetWithObjects:count:":{"abs":"Creates and returns a set containing a specified number of objects from a given C array of objects.","dec":"+ (instancetype)orderedSetWithObjects:(const id [])objects count:(NSUInteger)cnt"},"orderedSetWithOrderedSet:":{"abs":"Creates and returns an ordered set containing the objects from another ordered set.","dec":"+ (instancetype)orderedSetWithOrderedSet:(NSOrderedSet *)set"},"orderedSetWithOrderedSet:range:copyItems:":{"abs":"Creates and returns a new ordered set for a specified range of objects in an ordered set.","dec":"+ (instancetype)orderedSetWithOrderedSet:(NSOrderedSet *)set range:(NSRange)range copyItems:(BOOL)flag"},"orderedSetWithSet:":{"abs":"Creates and returns an ordered set with the contents of a set.","dec":"+ (instancetype)orderedSetWithSet:(NSSet *)set"},"orderedSetWithSet:copyItems:":{"abs":"Creates and returns an ordered set with the contents of a set, optionally copying the items.","dec":"+ (instancetype)orderedSetWithSet:(NSSet *)set copyItems:(BOOL)flag"}},"[-]":{"addObserver:forKeyPath:options:context:":{"abs":"Raises an exception.","dec":"- (void)addObserver:(NSObject *)observer forKeyPath:(NSString *)keyPath options:(NSKeyValueObservingOptions)options context:(void *)context"},"array":{"abs":"Returns a representation of the ordered set as an array.","dec":"- (NSArray *)array"},"containsObject:":{"abs":"Returns a Boolean value that indicates whether a given object is present in the ordered set.","dec":"- (BOOL)containsObject:(id)object"},"count":{"abs":"Returns the number of members in the set.","dec":"- (NSUInteger)count"},"description":{"abs":"Returns a string that represents the contents of the ordered set, formatted as a property list.","dec":"- (NSString *)description"},"descriptionWithLocale:":{"abs":"Returns a string that represents the contents of the ordered set, formatted as a property list.","dec":"- (NSString *)descriptionWithLocale:(id)locale"},"descriptionWithLocale:indent:":{"abs":"Returns a string that represents the contents of the ordered set, formatted as a property list.","dec":"- (NSString *)descriptionWithLocale:(id)locale indent:(NSUInteger)level"},"enumerateObjectsAtIndexes:options:usingBlock:":{"abs":"Executes a given block using the objects in the ordered set at the specified indexes.","dec":"- (void)enumerateObjectsAtIndexes:(NSIndexSet *)indexSet options:(NSEnumerationOptions)opts usingBlock:(void (^)(id obj, NSUInteger idx, BOOL *stop))block"},"enumerateObjectsUsingBlock:":{"abs":"Executes a given block using each object in the ordered set.","dec":"- (void)enumerateObjectsUsingBlock:(void (^)(id obj, NSUInteger idx, BOOL *stop))block"},"enumerateObjectsWithOptions:usingBlock:":{"abs":"Executes a given block using each object in the set, using the specified enumeration options.","dec":"- (void)enumerateObjectsWithOptions:(NSEnumerationOptions)opts usingBlock:(void (^)(id obj, NSUInteger idx, BOOL *stop))block"},"filteredOrderedSetUsingPredicate:":{"abs":"Evaluates a given predicate against each object in the receiving ordered set and returns a new ordered set containing the objects for which the predicate returns true.","dec":"- (NSOrderedSet *)filteredOrderedSetUsingPredicate:(NSPredicate *)predicate"},"firstObject":{"abs":"Returns the first object in the ordered set.","dec":"- (id)firstObject"},"getObjects:range:":{"abs":"Copies the objects contained in the ordered set that fall within the specified range to objects.","dec":"- (void)getObjects:(id [])objects range:(NSRange)range"},"indexesOfObjectsAtIndexes:options:passingTest:":{"abs":"Returns the index, from a given set of indexes, of the object in the ordered set that passes a test in a given block for a given set of enumeration options.","dec":"- (NSIndexSet *)indexesOfObjectsAtIndexes:(NSIndexSet *)indexSet options:(NSEnumerationOptions)opts passingTest:(BOOL (^)(id obj, NSUInteger idx, BOOL *stop))predicate"},"indexesOfObjectsPassingTest:":{"abs":"Returns the index of the object in the ordered set that passes a test in a given block.","dec":"- (NSIndexSet *)indexesOfObjectsPassingTest:(BOOL (^)(id obj, NSUInteger idx, BOOL *stop))predicate"},"indexesOfObjectsWithOptions:passingTest:":{"abs":"Returns the index of an object in the ordered set that passes a test in a given block for a given set of enumeration options.","dec":"- (NSIndexSet *)indexesOfObjectsWithOptions:(NSEnumerationOptions)opts passingTest:(BOOL (^)(id obj, NSUInteger idx, BOOL *stop))predicate"},"indexOfObject:":{"abs":"Returns the index of the specified object.","dec":"- (NSUInteger)indexOfObject:(id)object"},"indexOfObject:inSortedRange:options:usingComparator:":{"abs":"Returns the index, within a specified range, of an object compared with elements in the ordered set using a given NSComparator block.","dec":"- (NSUInteger)indexOfObject:(id)object inSortedRange:(NSRange)range options:(NSBinarySearchingOptions)opts usingComparator:(NSComparator)cmp"},"indexOfObjectAtIndexes:options:passingTest:":{"abs":"Returns the index, from a given set of indexes, of the object in the ordered set that passes a test in a given block for a given set of enumeration options.","dec":"- (NSUInteger)indexOfObjectAtIndexes:(NSIndexSet *)indexSet options:(NSEnumerationOptions)opts passingTest:(BOOL (^)(id obj, NSUInteger idx, BOOL *stop))predicate"},"indexOfObjectPassingTest:":{"abs":"Returns the index of the object in the ordered set that passes a test in a given block.","dec":"- (NSUInteger)indexOfObjectPassingTest:(BOOL (^)(id obj, NSUInteger idx, BOOL *stop))predicate"},"indexOfObjectWithOptions:passingTest:":{"abs":"Returns the index of an object in the ordered set that passes a test in a given block for a given set of enumeration options.","dec":"- (NSUInteger)indexOfObjectWithOptions:(NSEnumerationOptions)opts passingTest:(BOOL (^)(id obj, NSUInteger idx, BOOL *stop))predicate"},"init":{"abs":"Initializes a newly allocated ordered set.","dec":"- (instancetype)init"},"initWithArray:":{"abs":"Initializes a newly allocated set with the objects that are contained in a given array.","dec":"- (instancetype)initWithArray:(NSArray *)array"},"initWithArray:copyItems:":{"abs":"Initializes a newly allocated set with the objects that are contained in a given array, optionally copying the items.","dec":"- (instancetype)initWithArray:(NSArray *)array copyItems:(BOOL)flag"},"initWithArray:range:copyItems:":{"abs":"Initializes a newly allocated set with the objects that are contained in the specified range of an array, optionally copying the items.","dec":"- (instancetype)initWithArray:(NSArray *)array range:(NSRange)range copyItems:(BOOL)flag"},"initWithObject:":{"abs":"Initializes a new ordered set with the object.","dec":"- (instancetype)initWithObject:(id)object"},"initWithObjects:":{"abs":"Initializes a newly allocated set with members taken from the specified list of objects.","dec":"- (instancetype)initWithObjects:(id)firstObj,, ..."},"initWithObjects:count:":{"abs":"Initializes a newly allocated set with a specified number of objects from a given C array of objects.","dec":"- (instancetype)initWithObjects:(const id [])objects count:(NSUInteger)cnt"},"initWithOrderedSet:":{"abs":"Initializes a new ordered set with the contents of a set.","dec":"- (instancetype)initWithOrderedSet:(NSOrderedSet *)set"},"initWithOrderedSet:copyItems:":{"abs":"Initializes a new ordered set with the contents of a set, optionally copying the items.","dec":"- (instancetype)initWithOrderedSet:(NSOrderedSet *)set copyItems:(BOOL)flag"},"initWithOrderedSet:range:copyItems:":{"abs":"Initializes a new ordered set with the contents of an ordered set, optionally copying the items.","dec":"- (instancetype)initWithOrderedSet:(NSOrderedSet *)orderedSet range:(NSRange)range copyItems:(BOOL)flag"},"initWithSet:":{"abs":"Initializes a new ordered set with the contents of a set.","dec":"- (instancetype)initWithSet:(NSSet *)set"},"initWithSet:copyItems:":{"abs":"Initializes a new ordered set with the contents of a set, optionally copying the objects in the set.","dec":"- (instancetype)initWithSet:(NSSet *)set copyItems:(BOOL)flag"},"intersectsOrderedSet:":{"abs":"Returns a Boolean value that indicates whether at least one object in the receiving ordered set is also present in another given ordered set.","dec":"- (BOOL)intersectsOrderedSet:(NSOrderedSet *)other"},"intersectsSet:":{"abs":"Returns a Boolean value that indicates whether at least one object in the receiving ordered set is also present in another given set.","dec":"- (BOOL)intersectsSet:(NSSet *)set"},"isEqualToOrderedSet:":{"abs":"Compares the receiving ordered set to another ordered set.","dec":"- (BOOL)isEqualToOrderedSet:(NSOrderedSet *)other"},"isSubsetOfOrderedSet:":{"abs":"Returns a Boolean value that indicates whether every object in the receiving ordered set is also present in another given ordered set.","dec":"- (BOOL)isSubsetOfOrderedSet:(NSOrderedSet *)other"},"isSubsetOfSet:":{"abs":"Returns a Boolean value that indicates whether every object in the receiving ordered set is also present in another given set.","dec":"- (BOOL)isSubsetOfSet:(NSSet *)set"},"lastObject":{"abs":"Returns the last object in the ordered set.","dec":"- (id)lastObject"},"objectAtIndex:":{"abs":"Returns the object at the specified index of the set.","dec":"- (id)objectAtIndex:(NSUInteger)index"},"objectAtIndexedSubscript:":{"abs":"Returns the object at the specified index of the set.","dec":"- (id)objectAtIndexedSubscript:(NSUInteger)index"},"objectEnumerator":{"abs":"Returns an enumerator object that lets you access each object in the ordered set.","dec":"- (NSEnumerator *)objectEnumerator"},"objectsAtIndexes:":{"abs":"Returns the objects in the ordered set at the specified indexes.","dec":"- (NSArray *)objectsAtIndexes:(NSIndexSet *)indexes"},"removeObserver:forKeyPath:":{"abs":"Raises an exception.","dec":"- (void)removeObserver:(NSObject *)observer forKeyPath:(NSString *)keyPath"},"removeObserver:forKeyPath:context:":{"abs":"Raises an exception.","dec":"- (void)removeObserver:(NSObject *)observer forKeyPath:(NSString *)keyPath context:(void *)context"},"reversedOrderedSet":{"abs":"Returns an ordered set in the reverse order.","dec":"- (NSOrderedSet *)reversedOrderedSet"},"reverseObjectEnumerator":{"abs":"Returns an enumerator object that lets you access each object in the ordered set.","dec":"- (NSEnumerator *)reverseObjectEnumerator"},"set":{"abs":"Returns a representation of the set containing the contents of the ordered set.","dec":"- (NSSet *)set"},"setValue:forKey:":{"abs":"Invokes setValue:forKey: on each of the receiver's members using the specified value and key","dec":"- (void)setValue:(id)value forKey:(NSString *)key"},"sortedArrayUsingComparator:":{"abs":"Returns an array that lists the receiving ordered set’s elements in ascending order, as determined by the comparison method specified by a given NSComparator block","dec":"- (NSArray *)sortedArrayUsingComparator:(NSComparator)cmptr"},"sortedArrayUsingDescriptors:":{"abs":"Returns an array of the ordered set’s elements sorted as specified by a given array of sort descriptors.","dec":"- (NSArray *)sortedArrayUsingDescriptors:(NSArray *)sortDescriptors"},"sortedArrayWithOptions:usingComparator:":{"abs":"Returns an array that lists the receiving ordered set’s elements in ascending order, as determined by the comparison method specified by a given NSComparator block.","dec":"- (NSArray *)sortedArrayWithOptions:(NSSortOptions)opts usingComparator:(NSComparator)cmptr"},"valueForKey:":{"abs":"Returns an ordered set containing the results of invoking valueForKey: using key on each of the ordered set’s objects.","dec":"- (id)valueForKey:(NSString *)key"}}};