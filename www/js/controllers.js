angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

})
.controller('initCtrl', function($scope) {

})

.controller('actionSheet', function($scope, $ionicActionSheet, $timeout) {

    show()
    function show() {
        var hideSheet = $ionicActionSheet.show({
        buttons: [
             { text: '<b>Share</b> This' },
             { text: 'Move' }
        ],
        destructiveText: 'Delete',
        titleText: 'Modify your album',
        cancelText: 'Cancel',
            cancel: function() {
                // add cancel code..
            },
            buttonClicked: function(index) {
                return true;
            }
        });
    };
})

.controller('backdrop', function($scope, $ionicBackdrop, $timeout) {
    show()
    function show() {
        $ionicBackdrop.retain();
        $timeout(function() {
            $ionicBackdrop.release();
        }, 3000);
    };
})

.controller('refersher', function($scope, $http) {
    $scope.items = [1,2,3];
    $scope.doRefresh = function() {
        $http.get('/new-items')
            .success(function(newItems) {
            $scope.items = newItems;
        })
        .finally(function() {
            $scope.$broadcast('scroll.refreshComplete');
        });
    };
})

.controller('list', function($scope) {

    $scope.data = {
        showDelete: false
    };

    $scope.edit = function(item) {
        alert('Edit Item: ' + item.id);
    };
    $scope.share = function(item) {
        alert('Share Item: ' + item.id);
    };

    $scope.moveItem = function(item, fromIndex, toIndex) {
        $scope.items.splice(fromIndex, 1);
        $scope.items.splice(toIndex, 0, item);
    };

    $scope.onItemDelete = function(item) {
        $scope.items.splice($scope.items.indexOf(item), 1);
    };

    $scope.items = [
        { id: 0 },
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
        { id: 7 },
        { id: 8 },
        { id: 9 },
        { id: 10 }
    ];
  
})

.controller('loading', function($scope, $ionicLoading, $timeout) {
    show();
    function show() {
        $ionicLoading.show({
            template: 'Loading...'
        });
        $timeout(function() {
            $ionicLoading.hide();
        }, 3000);
    };
})

.controller('modal', function($scope, $ionicModal) {
    $ionicModal.fromTemplateUrl('my-modal.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.modal = modal;
    });
    $scope.openModal = function() {
        $scope.modal.show();
    };
    $scope.closeModal = function() {
        $scope.modal.hide();
    };
    //Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
        $scope.modal.remove();
    });
    // Execute action on hide modal
    $scope.$on('modal.hidden', function() {
    // Execute action
    });
    // Execute action on remove modal
    $scope.$on('modal.removed', function() {
    // Execute action
    });
})

.controller('popover', function($scope, $ionicPopover) {

  // .fromTemplate() method
  var template = '<ion-popover-view><ion-header-bar> <h1 class="title">My Popover Title</h1> </ion-header-bar> <ion-content> Hello! </ion-content></ion-popover-view>';

  $scope.popover = $ionicPopover.fromTemplate(template, {
    scope: $scope
  });

  // .fromTemplateUrl() method
  $ionicPopover.fromTemplateUrl('my-popover.html', {
    scope: $scope
  }).then(function(popover) {
    $scope.popover = popover;
  });


  $scope.openPopover = function($event) {
    $scope.popover.show($event);
  };
  $scope.closePopover = function() {
    $scope.popover.hide();
  };
  //Cleanup the popover when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.popover.remove();
  });
  // Execute action on hide popover
  $scope.$on('popover.hidden', function() {
    // Execute action
  });
  // Execute action on remove popover
  $scope.$on('popover.removed', function() {
    // Execute action
  });
})

.controller('popup', function($scope, $ionicPopup, $timeout) {

 // Triggered on a button click, or some other target
 $scope.showPopup = function() {
   $scope.data = {}

   // An elaborate, custom popup
   var myPopup = $ionicPopup.show({
     template: '<input type="password" ng-model="data.wifi">',
     title: 'Enter Wi-Fi Password',
     subTitle: 'Please use normal things',
     scope: $scope,
     buttons: [
       { text: 'Cancel' },
       {
         text: '<b>Save</b>',
         type: 'button-positive',
         onTap: function(e) {
           if (!$scope.data.wifi) {
             //don't allow the user to close unless he enters wifi password
             e.preventDefault();
           } else {
             return $scope.data.wifi;
           }
         }
       },
     ]
   });
   myPopup.then(function(res) {
     console.log('Tapped!', res);
   });
   $timeout(function() {
      myPopup.close(); //close the popup after 3 seconds for some reason
   }, 3000);
  };
   // A confirm dialog
   $scope.showConfirm = function() {
     var confirmPopup = $ionicPopup.confirm({
       title: 'Consume Ice Cream',
       template: 'Are you sure you want to eat this ice cream?'
     });
     confirmPopup.then(function(res) {
       if(res) {
         console.log('You are sure');
       } else {
         console.log('You are not sure');
       }
     });
   };

   // An alert dialog
   $scope.showAlert = function() {
     var alertPopup = $ionicPopup.alert({
       title: 'Don\'t eat that!',
       template: 'It might taste good'
     });
     alertPopup.then(function(res) {
       console.log('Thank you for not eating my delicious ice cream cone');
     });
   };
});