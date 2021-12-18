---
label: Registration
description: Details about registration for the !!conference.year!! !!conference.full_name!! conference.
registration_open: false

menus:
  attendees:
    title: Registration
    alt: Registration details for !!conference.short_name!! !!conference.year!!.
    weight: 0
---

# Registration

{% if page.registration_open %}
Registration for {{ site.conference.short_name }} {{ site.conference.year }} is now open.
{% endif %} Although {{ site.conference.short_name }} {{ site.conference.year }} is a virtual conference, we require attendees to register and pay a small fee to cover the costs of running the event (e.g., the various licences we have purchased as part of administering the conference and publishing the conference proceedings).

We are committed to ensuring that {{ site.conference.short_name }} {{ site.conference.year }} is an accessible conference for all attendees. The {{ site.data.oc['conference']['roles']['sv_diversity']['label'] }} and {{ site.data.oc['conference']['roles']['virtual']['label'] }} are progressively assembling information regarding [accessibility on a separate page]({{ "/accessibility/" | relative_url }}). If you have questions or wish to raise a point regarding our efforts to ensure all attendees can participate, please contact the <a href="{{ site.data.oc['conference']['roles']['sv_diversity']['email'] }}" title="Contact the {{ site.conference.short_name }} {{ site.conference.year }} {{ site.data.oc['conference']['roles']['sv_diversity']['label'] }} if you have any questions">{{ site.data.oc['conference']['roles']['sv_diversity']['label'] }}</a> directly.

<div class="d-block py-5 mb-2 text-center">
{% if page.registration_open %}
	<a href="https://sisweb.ucd.ie/usis/W_HU_MENU.P_PUBLISH?p_tag=CONFHCI" class="btn btn-lg btn-primary" title="Register for {{ site.conference.short_name }} {{ site.conference.year }}">Register for {{ site.conference.short_name }} {{ site.conference.year }} &rarr;</a>
{% else %}
	<a class="btn btn-lg btn-outline-primary disabled">Registration is currently closed</a>
{% endif %}
</div>

Authors with papers accepted must register by **1st July 2021**.
Registration for attendees closes on **26th July 2021 at midday (UTC+1 time)**.

## Registration fees

There are three different rates for registration at {{ site.conference.short_name }} {{ site.conference.year }}. Please ensure you register at the correct rate---if you do not, you will be liable to pay the difference.

* Standard Rate: **80€**
* Reduced Rate: **50€**
* Student Rate: **30€**

The Reduced Rate is only open to individuals in economically developing countries—[please check this list of countries]({{ "/registration/reduced-rates/" | relative_url }} "Registration Reduced Rate Eligibility") to determine if you are eligible. The Student Rate is restricted  to students, and you must upload valid student ID during registration to prove your student status.

At least one author of each accepted paper must register for the conference. A paper without a corresponding registration may be withheld from publication. 


## Receipts

If the automated email confirmation is not adequate for your institutional records, please contact the {{ site.conference.short_name }} {{ site.conference.year }} registration chair (details below) for a more complete receipt. Please include in your email a bullet-point list of what is required on the receipt.


## Need support or have questions?

{% for group in site.data.oc %}
	{% for role in group[1]['roles'] %}
		{% if role[1]['registration'] %}
<p>If you need any support or have questions about the registration process, please contact the <a href="{{ role[1].email }}" title="Retrieve the email address for the {{ site.conference.short_name }} {{ site.conference.year }} {{ role[1].label }}">{{ site.conference.short_name }} {{ site.conference.year }} {{ role[1].label }}</a>, 
		{% assign use_and = role[1]['people'] | size | plus: -1 %}
		{% for person in role[1]['people'] %}{{ person.name }}{% if forloop.index == use_and %} and {% else %}{% unless forloop.last %}, {% endunless %}{% endif %}{% endfor %}.</p>
		{% break %}
		{% endif %}
	{% endfor %}
{% endfor %}
