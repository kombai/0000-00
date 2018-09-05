ClassRef.UIPushBehavior = {"[:]":"UIDynamicBehavior : NSObject","[.]":{"active":{"abs":"The state of the push behavior’s force: either active or inactive.","dec":"@property(nonatomic, readwrite) BOOL active"},"angle":{"abs":"The angle, in radians, of the force vector for the behavior.","dec":"@property(readwrite, nonatomic) CGFloat angle"},"items":{"abs":"Returns the set of dynamic items you’ve added to the push behavior. (read-only)","dec":"@property(nonatomic, readonly, copy) NSArray *items"},"magnitude":{"abs":"The magnitude of the force vector for the push behavior.","dec":"@property(readwrite, nonatomic) CGFloat magnitude"},"mode":{"abs":"Returns the force mode for the push behavior. (read-only)","dec":"@property(nonatomic, readonly) UIPushBehaviorMode mode"},"pushDirection":{"abs":"The direction of the force vector for the behavior, expressed as x and y components and using standard UIKit geometry.","dec":"@property(readwrite, nonatomic) CGVector pushDirection"}},"[-]":{"addItem:":{"abs":"Adds a dynamic item to the behavior’s dynamic item array.","dec":"- (void)addItem:(id<UIDynamicItem>)item"},"initWithItems:mode:":{"abs":"Initializes a push behavior with an array of dynamic items.","dec":"- (instancetype)initWithItems:(NSArray *)items mode:(UIPushBehaviorMode)mode"},"removeItem:":{"abs":"Removes a specific dynamic item from the behavior.","dec":"- (void)removeItem:(id<UIDynamicItem>)item"},"setAngle:magnitude:":{"abs":"Sets the angle and magnitude of the force vector for the behavior.","dec":"- (void)setAngle:(CGFloat)angle magnitude:(CGFloat)magnitude"},"setTargetOffsetFromCenter:forItem:":{"abs":"Sets the offset, from the center of a dynamic item, at which to apply the push behavior’s force vector.","dec":"- (void)setTargetOffsetFromCenter:(UIOffset)o forItem:(id<UIDynamicItem>)item"},"targetOffsetFromCenterForItem:":{"abs":"Returns the offset, from the center of a dynamic item, at which the push behavior’s force vector is applied.","dec":"- (UIOffset)targetOffsetFromCenterForItem:(id<UIDynamicItem>)item"}},"[=]":{"UIPushBehaviorModeContinuous":"","UIPushBehaviorModeInstantaneous":""}};