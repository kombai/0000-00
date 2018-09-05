ClassRef.UIDynamicAnimator = {"[:]":"NSObject","[.]":{"behaviors":{"abs":"The dynamic behaviors managed by a dynamic animator. (read-only)","dec":"@property(nonatomic, readonly, copy) NSArray *behaviors"},"delegate":{"abs":"The delegate for responding to pausing or resumption of animation.","dec":"@property(nonatomic, assign) id<UIDynamicAnimatorDelegate> delegate"},"referenceView":{"abs":"The view that a dynamic animator was initialized with. (read-only)","dec":"@property(nonatomic, readonly) UIView *referenceView"},"running":{"abs":"Returns YES if the dynamic animator is running. (read-only)","dec":"@property(nonatomic, readonly, getter=isRunning) BOOL running"}},"[-]":{"addBehavior:":{"abs":"Adds a dynamic behavior to a dynamic animator.","dec":"- (void)addBehavior:(UIDynamicBehavior *)behavior"},"elapsedTime":{"abs":"Returns the time interval since the dynamic animator started running.","dec":"- (NSTimeInterval)elapsedTime"},"initWithCollectionViewLayout:":{"abs":"Initializes a dynamic animator with a specified collection view layout.","dec":"- (instancetype)initWithCollectionViewLayout:(UICollectionViewLayout *)layout"},"initWithReferenceView:":{"abs":"Initializes a dynamic animator with a specified view as its reference view.","dec":"- (instancetype)initWithReferenceView:(UIView *)view"},"itemsInRect:":{"abs":"Returns the dynamic items, from the animator’s behaviors, that intersect a specified rectangle.","dec":"- (NSArray *)itemsInRect:(CGRect)rect"},"layoutAttributesForCellAtIndexPath:":{"abs":"A convenience method for returning the layout attributes for a collection view cell.","dec":"- (UICollectionViewLayoutAttributes *)layoutAttributesForCellAtIndexPath:(NSIndexPath *)indexPath"},"layoutAttributesForDecorationViewOfKind:atIndexPath:":{"abs":"A convenience method for returning the layout attributes for a collection view decoration view.","dec":"- (UICollectionViewLayoutAttributes *)layoutAttributesForDecorationViewOfKind:(NSString *)decorationViewKind atIndexPath:(NSIndexPath *)indexPath"},"layoutAttributesForSupplementaryViewOfKind:atIndexPath:":{"abs":"A convenience method for returning the layout attributes for a collection view supplementary view.","dec":"- (UICollectionViewLayoutAttributes *)layoutAttributesForSupplementaryViewOfKind:(NSString *)kind atIndexPath:(NSIndexPath *)indexPath"},"removeAllBehaviors":{"abs":"Removes all of the dynamic behaviors from a dynamic animator.","dec":"- (void)removeAllBehaviors"},"removeBehavior:":{"abs":"Removes a specified dynamic behavior from a dynamic animator.","dec":"- (void)removeBehavior:(UIDynamicBehavior *)behavior"},"updateItemUsingCurrentState:":{"abs":"Asks a dynamic animator to read the current state of a dynamic item, replacing the animator’s internal representation of the item’s state.","dec":"- (void)updateItemUsingCurrentState:(id<UIDynamicItem>)item"}}};