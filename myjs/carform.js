//Don't forget to inlcude jquery library before this in html page

$(document).ready(function(e) {
  $("#frmEnquiry").on('submit', (function(e) {
    e.preventDefault();
    $('#loader-icon').show();
		$('#empty-fields-warning').show();
    var valid;
    valid = validateContact();
    if (valid) {
      $.ajax({
        url: "mail-send.php",
        type: "POST",
        data: new FormData(this),
        contentType: false,
        cache: false,
        processData: false,
        success: function(data) {
          $("#mail-status").html(data);
          $('#loader-icon').hide();
					$('#empty-fields-warning').hide();
        },
        error: function(data) {
					$("#mail-status").html(data);
					$('#loader-icon').hide();
				}

      });
    }
  }));

  //Alder French Custom Code

  $(document).ready(function() {

    //Count how many files have been uploaded and update
    //file upload button to show it
    $("#files").on("change", function() {
      //var numFiles = $("input:file", this)[0].files.length;
      var obj = document.getElementById("fileCount");
      obj.innerText = 'File/Files Uploaded!';
      console.log("I got here");

    });

    // Add check if input box has valid input
    //and add triangle if it is not on keypress
    $("#userName").keypress(function() {
      $("#nameCheck").addClass("fa-check");
    });

    $("#userEmail").keypress(function() {
      $("#emailCheck").removeClass("fa-exclamation-triangle");
      $("#emailCheck").addClass("fa-check");
    });

    $("#carYear").keypress(function() {
      $("#yearCheck").addClass("fa-check");
    });

    $("#carMake").keypress(function() {
      $("#makeCheck").addClass("fa-check");
    });

    $("#subject").keypress(function() {
      $("#modelCheck").addClass("fa-check");
    });

    $("#carLocation").keypress(function() {
      $("#locationCheck").addClass("fa-check");
    });

    $("#content").keypress(function() {
      $("#description").addClass("fa-check");
    });
  });





  //Validate Contact
  function validateContact() {
    var valid = true;
    $(".demoInputBox").css('background-color', '');
    $(".info").html('');
    $("#userName").removeClass("invalid");
    $("#userEmail").removeClass("invalid");
    $("#subject").removeClass("invalid");
    $("#content").removeClass("invalid");

    if (!$("#userName").val()) {
      $("#userName").addClass("invalid");
      $("#userName").attr("title", "Required");
      valid = false;
    }
    if (!$("#userEmail").val()) {
      $("#userEmail").addClass("invalid");
      $("#userEmail").attr("title", "Required");
      valid = false;
    }
    if (!$("#userEmail").val().match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)) {
      $("#userEmail").addClass("invalid");
      $("#userEmail").attr("title", "Invalid Email");
      valid = false;
    }

    if (!$("#subject").val()) {
      $("#subject").addClass("invalid");
      $("#subject").attr("title", "Required");
      valid = false;
    }

    //Commented this out because I want email to send even
    //if the user doesn't fill the content field
    //	if(!$("#content").val()) {
    //		$("#content").addClass("invalid");
    //        $("#content").attr("title","Required");
    //		valid = false;
    //	}

    return valid;
  }

});
